"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
  const route = useRouter();
  const [value, setValue] = useState("");
  const debouncevalue = useDebounce(value, 600);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    //stringigyurl is  a function that helps create a URL by combining a base URL and query parameters. and then using route.push(url) to navigate there
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncevalue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    console.log(typeof url);
    route.push(url);
  }, [debouncevalue, route]);

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
