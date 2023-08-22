"use client";
import { Main, Section } from "./styles";

export default function Home() {
  return (
    <Main>
      {/* main Section */}
      <Section>
        <h1>Harin's portfolio</h1>
        front-end developer
      </Section>

      {/* tech Section */}
      <section>
        <h1>Techs</h1>
        React, Next.js, JavaScript, TypeScript, Emotion, TailWind, html5, CSS3,
        MySql
      </section>

      {/* portfolio Section */}
      <section>
        <h1>Portfolio</h1>
        DV몰, 당신의 제작소, 하이픈 페이, 덴탈잡 모바일(웹앱), 대한예장 GAIS,
        현대 로보틱스 서빙로봇
      </section>

      {/* sns&contact Section */}
      <section>
        <h1>Contact</h1>
        email: harinnnkim@gmail.com / github: / velog:
      </section>
    </Main>
  );
}
