<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import { images } from '$lib/utils/images';
	import Faq from './Faq.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Häufige Fragen - Moravian Brass Festival Berlin 2023</title>
</svelte:head>

<Container color="blue" image={images[1]}>
	{#snippet left()}
		{#if children}{@render children()}{:else}
			<img alt="Bär mit Trompete" src="/bear_blue.svg" width="200" height="200" />
			<Header color="blue" title="Fragen und Antworten" subTitle="Alle Informationen" />
			<div class="my-8 flex flex-col">
				<Faq question="Wann findet das Bläsertreffen statt?">
					Fr. 26.05.2023 (Anreise) bis Mo. 29.05.2023 (Abreise)
				</Faq>
				<Faq question="Wo findet das Bläsertreffen statt?">
					Wir freuen uns, euch ins Böhmische Dorf in Berlin einladen zu dürfen. Den Großteil der
					Zeit werden wir auf dem Gelände der Gemeinde verbringen. Es wird aber auch Gelegenheiten
					geben, die Stadt etwas kennenzulernen.
					<br />
					<a
						href="https://goo.gl/maps/FJaHy7ys4AEAhd9p6"
						class="mt-2 inline-flex items-center border-2 p-3"
						target="_blank"
						rel="noreferrer"
					>
						<img
							width="20"
							height="20"
							alt="Google Maps Logo"
							src="/google_maps.svg"
							class="mr-3"
						/>
						In Google Maps anzeigen
					</a>
				</Faq>
				<Faq question="Kann ich mich noch anmelden?">
					Die Anmeldung für den Bläsertag ist leider schon geschlossen. Falls du dennoch teilnehmen
					möchtest, kannst du dich gern an das Vorbereitungsteam wenden. Wir müssen dann individuell
					entscheiden, ob das noch möglich ist.
				</Faq>
			</div>
		{/if}
	{/snippet}
	{#snippet right()}
		<div class="my-8 flex flex-col items-start">
			<Faq question="Wie viel kostet das Bläsertreffen?">
				Der Teilnehmerbeitrag beträgt für Vollzahler:innen <b>120 €</b> und ermäßigt <b>90 €</b>.
				Ermäßigt sind Kinder, Jugendliche in Ausbildung und Studierende. Zuschüsse können bei jeder
				Gemeinde beantragt werden. Kinder unter 6 Jahren sind frei.
				<br />
				Darin enthalten ist die Verpflegung auf dem Festivalgelände, sowie die Teilnahme an allen Programmpunkten.
				Die Unterkunft mit Frühstück ist dieses Mal nicht enthalten, sondern muss selbst organisiert
				werden.
				<br />
				Da das Programm sich für Gäste, bis auf die Proben, nicht unterscheidet, wird es hier auch keinen
				preislichen Unterschied geben.
				<br />
				<br />
				Da wir schon verbindliche Zusagen gemacht haben, behalten wir bei Absagen 50 % des Teilnehmerbeitrags
				ein. Wenn du erst 2 Wochen vor dem Bläsertreffen absagst, müssen wir den gesamten Beitrag einbehalten.
			</Faq>
			<Faq question="Wo werden wir untergebracht?">
				Das Vorbereitungsteam hat entschieden, dass es einfacher für alle ist, wenn sich jede:r
				selbst ein Quartier sucht. Eine Liste von Hotels in der Umgebung findet ihr auf der Seite
				<a href="/information" class="text-blue-50">"Informationen"</a>.
				<br />
				Für Jugendliche wird es ein Massenquartier (inkl. Frühstück) in einer Turnhalle in der Nähe des
				Geländes geben. Das Mindestalter für das Massenquartier beträgt 14 Jahre. Für die Übernachtung
				und Frühstück kommen 50€ zum Teilnehmerbeitrag dazu.
			</Faq>
		</div>
	{/snippet}
</Container>
