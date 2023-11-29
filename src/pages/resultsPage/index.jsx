import Template from '../../components/template';
import BlueBack from '../../assets/blueBack.svg';
const ResultsPage = ({ children }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg,#f2f6f8,#e7eff3)',
        position: 'relative',
      }}
    >
      <Template>
        <div className="w-screen flex shadow-button">
          <div className="flex w-full flex-col md:flex-row gap-2 self-center px-4 md:px-2 lg:px-0 lg:items-center mx-auto pt-3 md:justify-start">
            <div className="md:pb-2 lg:pb-1">
              <img
                alt="rgb Lotto logo"
                className="w-24 md:h-8 lg:h-16 lg:w-36"
                src="https://www.lottery.ie/content/dam/pli/logos/left/rgb/Lotto.svg"
                role="img"
              />
            </div>
            <div className="flex flex-row flex-1 md:gap-6 gap-2 lg:gap-2 w-full self-stretch items-end">
              <span className="flex flex-col relative select-none cursor-pointer whitespace-pre md:whitespace-normal w-full text-lg md:max-w-56 lg:w-1/4 h-10 justify-center items-start leading-tight font-bold">
                <span>View Results</span>
                <div className="absolute bottom-0 rounded h-1 w-full w-3/5 bg-blue-dark"></div>
              </span>
              <span
                className="flex flex-col relative select-none cursor-pointer whitespace-pre md:whitespace-normal w-full text-lg md:max-w-56 lg:w-1/4 h-10 justify-center items-start leading-tight"
                href="/results/lotto/checker"
              >
                <span>Check My Numbers</span>
              </span>
            </div>
          </div>
        </div>
        {children}
      </Template>
    </div>
  );
};

export default ResultsPage;
