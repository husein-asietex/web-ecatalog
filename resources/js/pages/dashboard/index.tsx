import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard() {

    const { post } = useForm();

    const submit = () => {
        post(route('logout'));
    };

    return (
        <DashboardLayout>
            <h1>Bisa dashboard</h1>
            <Button onClick={submit}>logout</Button>
        </DashboardLayout>
    )
}