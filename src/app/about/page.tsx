import { Heading, Flex, Text, Container, Box} from "@radix-ui/themes";
import Link from "next/link";

export default function About() {

    return (
        <Container asChild size={{initial: "2", xs: "2", xl: "4"}} align="center" m={{initial: "6", xl: "9"}}>
            <Flex direction="column" minHeight="80vh">
                <Heading size={{initial: "6", xs : "6", xl: "8"}}>
                    About Me
                </Heading>
                <Box height="5vh"></Box>
                <Text size={{initial: "4", xs: "4", xl: "6"}} wrap="wrap">
                    Ciao, mi chiamo Alessandro e la mia vita si divide principalmente in due parti:
                    di giorno svolgo il ruolo di Backend Engineer nel team di sviluppo di
                    <Link href="https://wedea.it"> Wedea Digital</Link> mentre la sera, da Settembre a Maggio,
                    sono in palestra come giocatore di pallavolo. Inoltre, tra lavoro
                    e sport, sono riuscito a laurearmi in Informatica alla Federico II di Napoli.

                    <Box height="3vh"></Box>
                    Sono un appassionato di sviluppo Backend anche perché non ho molto occhio per il design (questo sito ne è la conferma).
                    Mi piace scrivere codice in vari linguaggi di programmazione come Go (il mio preferito), Python e PHP e,
                    quando non lo faccio, gestisco l&apos;infrastruttura delle applicazioni in cloud (AWS is the best, change my mind).

                    <Box height="3vh"></Box>
                    La parte più bella del mio lavoro? Risolvere problemi di qualsiasi genere e,
                    anche se sembra scontato, se non ci fossero problemi da risolvere, sarei disoccupato.

                    <Box height="3vh"></Box>
                    Mi piacciono parecchio i videogames e sono fan di Playstion anche se ormai il pulsante play non viene premuto così spesso.

                    <Box height="3vh"></Box>
                    Infine, sono anche un appassionato di finanza personale che, per quanto possa sembrare ostica, tra un podcast e un libro, qualcosa si capisce.

                </Text>
            </Flex>
        </Container>
    );

}