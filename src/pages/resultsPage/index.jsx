import Template from '../../components/template';
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
