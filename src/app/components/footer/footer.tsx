import { Box, Flex, Link } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon, Pencil1Icon } from "@radix-ui/react-icons";

export default function Footer() {

    const width: string = "30";
    const height: string = "30";

    return (
        <Box style={{ backgroundColor: 'var(--gray-2)', padding: '1rem 0' }}>
            <Flex justify="center" align="center" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <Flex gap="6">
                    <Link href="https://github.com/alexmar07" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon width={width} height={height} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/alessandro-marotta-b8644a174/" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogoIcon width={width} height={height} />
                    </Link>
                    <Link href="mailto:alessand.marotta@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Pencil1Icon width={width} height={height} />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}