import Head from "next/head";
import SafeEnvironment from "ui/components/feedBack/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça varios eBooks de nossa Biblioteca Virtual"}
        subtitle={"Preencha seu ebook favorito"}
      />
    </div>
  );
}
