"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";
export const SearchInput = () => {
  const route = useRouter();
  const [value, setValue] = useState("");
  const debounced = useDebounceCallback(setValue, 0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounced(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    route.push(url);
  }, [value, route]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform text-muted-foreground -translate-y-1/2 h-4 w-4 " />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="search boards..."
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
