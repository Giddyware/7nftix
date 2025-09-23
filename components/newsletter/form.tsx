"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterForm = () => {
  return (
    <div className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join our mailing list
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Be the first to know about our latest collections, exclusive
            collaborations, and special events.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
