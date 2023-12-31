import { Tabs } from 'antd';
import Template from '../../components/template';
import GameLogos from '../../components/svg/GameLogos';
import ViewResultsPage from './viewResultsPage';
import '../../App.css';
const SuperSeteHistoryPage = () => {
  return (
    <div className="bg-[#f2f6f8]">
      <div className="ml-auto mr-auto">
        <Tabs
          defaultActiveKey="2"
          items={[
            {
              label: 'View Results',
              key: '2',
              children: (
                <Template>
                  <ViewResultsPage />
                </Template>
              ),
            },
            {
              label: (
                <GameLogos
                  logoName="08"
                  color="#781ea5"
                  width="162"
                  height="76px"
                />
              ),
              key: '3',
              disabled: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SuperSeteHistoryPage;
