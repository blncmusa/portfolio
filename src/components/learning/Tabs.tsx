// components/Tabs.tsx
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type TabProps = {
  topics: { id: string; name: string }[];
};

function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Tabs({ topics }: TabProps) {
  const pathname = usePathname();

  return (
    <div className="tabs-header flex space-x-4 border-b border-gray-600">
      {topics.map((topic) => {
        const slug = generateSlug(topic.name);
        const isActive = pathname === `/learning/${slug}`;

        return (
          <Link
            key={topic.id}
            href={`/learning/${slug}`}
            className={`tab-button p-2 ${
              isActive ? "text-white border-b-2 border-white" : "text-gray-400"
            }`}
          >
            {topic.name}
          </Link>
        );
      })}
    </div>
  );
}
