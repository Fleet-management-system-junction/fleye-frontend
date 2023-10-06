import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map/Map.module"), {
  loading: () => <h1>hello world</h1>,
  ssr: false
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Map />
    </main>
  )
}
