import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function PaymentForm({ data, errors, setData }: { data: any, errors: any, setData: any }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
            <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Secure Payment</h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        All card information is fully encrypted, secure and protected.
                    </p>
                </header>
                <div className="mt-6 sm:space-y-0">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Cedit/Debit Card</AccordionTrigger>
                            <AccordionContent className='grid grid-cols-1 gap-4 my-4'>
                                <div>
                                    <Label htmlFor="payment_method">Payment method</Label>
                                    <Input
                                        id="payment_method"
                                        className="mt-1 block w-full"
                                        value={data.payment_method}
                                        onChange={(e) => setData('payment_method', e.target.value)}
                                        autoComplete="payment_method"
                                        disabled
                                    />
                                    <InputError message={errors.payment_method} />
                                </div>
                                <div>
                                    <Label htmlFor="card_holder_name">Card holder name</Label>
                                    <Input
                                        id="card_holder_name"
                                        className="mt-1 block w-full"
                                        value={data.card_holder_name}
                                        onChange={(e) => setData('card_holder_name', e.target.value)}
                                        autoComplete="card_holder_name"
                                    />
                                    <InputError message={errors.card_holder_name} />
                                </div>
                                <div>
                                    <Label htmlFor="card_number">Card number</Label>
                                    <Input
                                        id="card_number"
                                        className="mt-1 block w-full"
                                        value={data.card_number}
                                        onChange={(e) => setData('card_number', e.target.value)}
                                        autoComplete="card_number"
                                    />
                                    <InputError message={errors.card_number} />
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                    <div>
                                        <Label htmlFor="expiry_date">Expiry date</Label>
                                        <Input
                                            id="expiry_date"
                                            className="mt-1 block w-full"
                                            value={data.expiry_date}
                                            onChange={(e) => setData('expiry_date', e.target.value)}
                                            autoComplete="expiry_date"
                                        />
                                        <InputError message={errors.expiry_date} />
                                    </div>
                                    <div>
                                        <Label htmlFor="cvc">CVC/CVV</Label>
                                        <Input
                                            id="cvc"
                                            className="mt-1 block w-full"
                                            value={data.cvc}
                                            onChange={(e) => setData('cvc', e.target.value)}
                                            autoComplete="cvc"
                                        />
                                        <InputError message={errors.cvc} />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>QR Payment</AccordionTrigger>
                            <AccordionContent>
                                This is a qr payment.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Online Banking</AccordionTrigger>
                            <AccordionContent>
                                This is a online banking payment.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            <div>
            </div>
        </div>
    );
}
