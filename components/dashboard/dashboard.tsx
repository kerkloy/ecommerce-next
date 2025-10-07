"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="flex gap-6">
      <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Users</h3>
              <p className="text-3xl font-bold mt-2">1,245</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Sales</h3>
              <p className="text-3xl font-bold mt-2">$34,560</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="text-3xl font-bold mt-2">87%</p>
            </CardContent>
          </Card>
    </div>
  )
}
