import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Filter,
  LayoutList,
  LayoutGrid,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import Navbar from '@/components/Navbar';
import ProductCardGrid from '@/components/ProductCardGrid';
import ProductCardList from "@/components/ProductCardList";
import AppLayout from "@/Layouts/AppLayout";
import ProductFilter, { FilterState } from "@/components/ProductFilter";

import { toast } from "sonner";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const deliveryTimes = [
  {
    value: "asap",
    id: "delivery-asap",
    label: "Standard delivery",
    description: "25–35 min · Driver assigned now",
    badge: "Fastest",
  },
  {
    value: "5-00",
    id: "delivery-5-00",
    label: "5:00 PM – 5:15 PM",
    description: "Prep starts at 4:45 PM",
  },
  {
    value: "5-30",
    id: "delivery-5-30",
    label: "5:30 PM – 5:45 PM",
    description: "Good if you're heading home",
  },
  {
    value: "6-00",
    id: "delivery-6-00",
    label: "6:00 PM – 6:15 PM",
    description: "Most popular · High demand",
  },
  {
    value: "6-30",
    id: "delivery-6-30",
    label: "6:30 PM – 6:45 PM",
    description: "Last slot before kitchen closes",
  },
];

export default function Dashboard() {
  const [openFilter, setOpenFilter] = useState<FilterState>({
    basic: true,
    oversize: false,
    polo: false,
    jaket: false,
    hoodie: false,
    sportwear: false,
    ladies: false,
  });

  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  const toggleFilter = (key: keyof FilterState) => {
    setOpenFilter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const products = Array(8).fill({
    title: "Cotton Combed BCI 24S Supersoft",
    gsm: "180 GSM",
    composition: "100% Cotton",
    width: "180 / 72\"",
    price: "Rp 149.000",
  });

  return (
    <AppLayout>

      {/* SIDEBAR FILTER */}
      <aside className="hidden md:block bg-white p-5 rounded-xl border border-slate-200 h-fit space-y-4">
        <ProductFilter openFilter={openFilter} toggleFilter={toggleFilter} />
      </aside>

      {/* CATALOG SECTION */}
      <main className="lg:col-span-3 space-y-6">
        
        {/* TOOLBAR: SEARCH, SORT, & VIEW */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 md:mb-6">
          
          {/* SEARCH */}
          <div className="fixed md:static flex-1 left-0 top-0 w-full md:w-auto z-10 py-4 md:py-0 px-5 md:px-0 bg-white border-b md:border-none border-slate-200">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input placeholder="Search product..." className="pl-9 bg-slate-50 border-slate-200 w-full" />
            </div>
          </div>

          {/* ACTIONS: SORT & VIEW */}
          <div className="flex items-center justify-between gap-4 w-full md:w-auto mt-[80px] md:mt-0">
            
            {/* SORT */}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>Urutkan:</span>
              <Select defaultValue="Populer">
                <SelectTrigger className="w-[120px] h-9">
                  <SelectValue placeholder="Populer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Populer">Populer</SelectItem>
                  <SelectItem value="Terbaru">Terbaru</SelectItem>
                  <SelectItem value="Termurah">Termurah</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* VIEW TOGGLE */}
            <div className="flex items-center border rounded-lg overflow-hidden bg-slate-50">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-none gap-1 h-9 ${viewMode === 'list' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                onClick={() => setViewMode('list')}
              >
                <LayoutList className="w-4 h-4" /> <span className="hidden md:block">List</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-none gap-1 h-9 ${viewMode === 'grid' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid className="w-4 h-4" /> <span className="hidden md:block">Grid</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Mobile */}
        <Drawer>
          <DrawerTrigger
            render={
              <Button variant={"outline"} className="w-full md:hidden text-slate-600 text-sm"> <Filter className="!w-3 !h-3" strokeWidth={2.3} /> Filter </Button>
            } />
          <DrawerContent className="pb-18 max-h-[80vh]">
            <DrawerHeader>
              <div className="flex w-full justify-center items-center h-1 mb-3">
                <div className="h-full w-1/3 rounded-full bg-slate-200"></div>
              </div>
              <DrawerTitle>Filter</DrawerTitle>
              <DrawerDescription>
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 scroll-fade overflow-y-auto h-10 p-4">
              <ProductFilter openFilter={openFilter} toggleFilter={toggleFilter} hideHeader={true} />
            </div>
            <DrawerFooter>
              <Button className="h-[34px]">
                Apply Filter
              </Button>
              <DrawerClose render={<Button variant="outline">Cancel</Button>} />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <p className="text-sm text-slate-500">Showing 30 results from total 124 products</p>

        {/* PRODUCT LIST */}
        <div className={`gap-4 grid ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-5'}`}>
          {products.map((product, index) => (
            viewMode === 'list' ? (
              <ProductCardList key={index} product={product} index={index} />
            ) : (
              <ProductCardGrid key={index} product={product} index={index} />
            )
          ))}
        </div>
      </main>

    </AppLayout >
  );
}