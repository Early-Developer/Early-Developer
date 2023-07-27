import Image from "next/image";
import styles from "./css/page.module.css";
import PopularKeywords from "./components/PopularKeywords/PopularKeywords";
import SearchBar from "./components/SearchBar/SearchBar";
import RealtimeSearch from "./components/RealtimeSearch";
import History from "./components/History/History";
import HotTopic from "./components/HotTopic/HotTopic";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import KeywordTag from "./components/KeywordTag/KeywordTag";
import Summary from "./components/Summary/Summary";
import { getKeyword } from "./api/getKeyword";

export default async function Home() {
  let session = await getServerSession(authOptions);
  const keywords = await getKeyword();
  let userEmail = session?.user.email;
  return (
    <main className={styles.main}>
      <Summary session={session}></Summary>
      <div className={styles.categories}>
        <History userEmail={userEmail} />
        <HotTopic />
      </div>
      <KeywordTag keywords={keywords}></KeywordTag>
    </main>
  );
}
