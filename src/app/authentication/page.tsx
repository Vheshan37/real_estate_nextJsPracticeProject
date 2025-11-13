"use client";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Auth1 from "./component/auth1";
import Auth2 from "./component/auth2";

export default function TestPage() {
  return (
    <div className="grid grid-cols-12 py-6">
      <div className="col-start-2 col-span-10">
        <h1 className="text-2xl font-bold mb-4">Test Page</h1>
        <p>This is a test page for the Test NextJS Concepts.</p>

        <Separator />

        <Tabs defaultValue="auth1" className="mt-6">
          <TabsList>
            <TabsTrigger value="auth1" className="px-6">
              Authentication 1
            </TabsTrigger>
            <TabsTrigger value="auth2" className="px-6">
              Authentication 2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="auth1">
            <Auth1 />
          </TabsContent>
          <TabsContent value="auth2">
            <Auth2 />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
