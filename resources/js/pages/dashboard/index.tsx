import { Button } from '@/components/ui/button';
import { route } from 'ziggy-js';
import { useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {

    const { post } = useForm();

    const submit = () => {
        post(route('logout'));
    };

    return (
        <AppLayout>
            <h1>Bisa dashboard</h1>
            <Button onClick={submit}>logout</Button>
        </AppLayout>
    )
}