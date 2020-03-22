# SickOrNot

Frontend-Implementierung unserer Projekt-Einreichung im Rahmen des #WirVsVirusHack #WirVsVirus.


## Getting started
Diese Anwendung hat den Zweck, die Vermittlung der Covid19-Testergebnisse von den Teststellen zuu den Getesteten einfach und schnell über eine Webanwendung und einen eigenen, eindeutigen Identifier-Code zu realisieren. Dies löst das Problem der dauerhaft überfüllten Telefonwarteschlangen und sorgt somit dafür, dass der Testablauf im Allgemeinen verschnellert wird.

### Running the project

Zum Ausführen der Anwendung, gib folgende Befehle in eine Kommandozeile im Projektordner ein:

```bash
npm install # or yarn
npm run dev
```

Öffne nun [localhost:3000](http://localhost:3000).

## Structure

Dieses Projekt basiert auf dem [Sapper](https://github.com/sveltejs/sapper) template mit Rollup.

## Production-Modus und Deployment

Um eine Production-Version der Anwendung zu starten, gib den Befehl `npm run build && npm start` in eine Kommandozeile im Projektordner ein. Dadurch wird Live-Reloading deaktiviert und die jeweiligen Bundler-Plugins aktiviert.

Um die Anwendung zu deployen, kann jede Umgebung genutzt werden, die Node in der Version 10 oder höher unterstützt. Als Beispiel kann hier [ZEIT Now](https://zeit.co/now) für das Deployen der statischen Anwendung genutzt werden. Hierfür müssen einfach folgende Befehle ausgeführt werden:

```bash
npm install -g now
now
```

Weitere Informationen zur Verwendung dieser Anwedung finden sich in der [Sapper Dokumentation](https://sapper.svelte.dev/docs/).

## Autoren