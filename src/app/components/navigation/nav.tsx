'use client';

import { Flex, TabNav } from "@radix-ui/themes";
import { Link } from "@radix-ui/themes";
import { usePathname } from 'next/navigation'

export default function Nav() {
    return (
        <Flex asChild direction="row" gap="9" gapY="4">
            <TabNav.Root size="2" justify="center" wrap="wrap">
                {navBarLink("/", "Home")}
                {navBarLink("/about", "About")}
                {navBarLink("/contact", "Contact")}
            </TabNav.Root>
        </Flex>
    );
}

function navBarLink(path: string, name: string) {

    const pathname = usePathname();

    return (
        <TabNav.Link asChild active={pathname === path}>
            <Link href={path} size="7">{name}</Link>
        </TabNav.Link>
    )
}