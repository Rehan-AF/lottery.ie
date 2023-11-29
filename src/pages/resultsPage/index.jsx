import Template from '../../components/template';
import BlueBack from '../../assets/blueBack.svg';
import ResultsCard from '../../components/resultsComponent/resultsCard';
import Results from '../../components/resultsComponent';
const ResultsPage = ({ children }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg,#f2f6f8,#e7eff3)',
        position: 'relative',
      }}
    >
      <Template>
        <Results />
      </Template>
    </div>
  );
};

export default ResultsPage;
