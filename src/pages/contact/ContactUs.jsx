import React from 'react'
import { toast } from 'react-toastify'
import Layout from '../../components/layout/Layout'

function ContactUs() {
    const submit = () => {
        toast.success("Form submiited")
    }
    return (
        <Layout>
            <div>
                <div class="flex items-center justify-center p-12">

                    <div class="mx-auto w-full pb-8 pt-5 max-w-[550px]">
                        <form>
                            <div class="mb-5">
                                <label
                                    for="name"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="email"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"

                                    placeholder="example@domain.com"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="subject"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter your subject"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div class="mb-5">
                                <label
                                    for="message"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button onClick={submit}
                                    class="hover:shadow-form hover:bg-rose-600 duration-300 rounded-md bg-blue-600 py-3 px-8 text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default ContactUs
