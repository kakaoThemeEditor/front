import { Skeleton } from "@/components/ui/skeleton";

export function PreviewSkeleton() {
  return (
    <div className="w-full h-full bg-white">
      {/* Header Skeleton */}
      <div className="w-full h-14 bg-gray-100 flex items-center px-4 rounded-t-2xl">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="ml-3 space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-3 w-[80px]" />
        </div>
      </div>

      {/* Ad Button Skeleton */}
      <div className="w-full px-4 py-2">
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>

      {/* Chat List Skeleton */}
      <div className="w-full px-4 space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-start space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Skeleton */}
      <div className="fixed bottom-0 w-full h-14 bg-gray-100 flex justify-around items-center px-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-6 w-6 rounded-full" />
        ))}
      </div>
    </div>
  );
}
