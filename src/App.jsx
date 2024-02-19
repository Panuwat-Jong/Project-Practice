import Header from "./component/Header";
import Logo from "./subComponent/LogoCompany/Logo";
import PerfectSolutions from "./subComponent/Perfect Solution/PerfectSolutions";
function App() {
  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-indigo-50 via-[#ffff] to-indigo-100">
      <div className="max-w-[1100px] m-auto w-full">
        <div className="h-full flex flex-col ">
          <Header />
          <Logo />
          <PerfectSolutions />
        </div>
      </div>
    </div>
  );
}

export default App;
