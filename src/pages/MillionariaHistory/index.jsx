import { Tabs } from 'antd';
import Template from '../../components/template';
import GameLogos from '../../components/svg/GameLogos';
import ViewResultsPage from './viewResultsPage';
import '../../App.css';
const MillionariaHistoryPage = () => {
  return (
    <div className="bg-[#f2f6f8]">
      <div className="ml-auto mr-auto">
        <Tabs
          defaultActiveKey="2"
          items={[
            {
              label: 'مشاهده نتایج',
              key: '2',
              children: (
                <Template>
                  <ViewResultsPage />
                </Template>
              ),
            },
            {
              label: <GameLogos logoName="05" color="#781ea5" width="162" />,
              key: '3',
              disabled: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MillionariaHistoryPage;
