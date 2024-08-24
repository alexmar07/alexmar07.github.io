'use client';

import { Flex, TabNav } from "@radix-ui/themes";
import { Link } from "@radix-ui/themes";
import { usePathname } from 'next/navigation'

export default function Nav() {

    const pathname = usePathname();

    return (
        <Flex asChild direction="row" gap="9" gapY="4" p="3">
            <TabNav.Root size="2" justify="center" wrap="wrap">
                <TabNav.Link asChild active={pathname === "/"}>
                    <Link href="/" size="7">Home</Link>
                </TabNav.Link>
                <TabNav.Link asChild active={pathname === "/about"}>
                    <Link href="/about" size="7">About</Link>
                </TabNav.Link>
            </TabNav.Root>
        </Flex>
    );
}