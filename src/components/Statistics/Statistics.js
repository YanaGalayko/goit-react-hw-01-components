import PropTypes from 'prop-types';
import { StatisticsSection,
         StatisticsTitle,
         StatisticsList,
         StatisticsItem,
         Label,
         Percentage
        } from './Statistics.styled';


export const Statistics = ({title, stats}) => {
    return (<StatisticsSection className="statistics">
    {title && <StatisticsTitle className="title">{title}</StatisticsTitle>}
  
    <StatisticsList className="stat-list">
        {stats.map(({id, label, percentage}) => (
             <StatisticsItem key={id} className="item">
             <Label className="label">{label}</Label>
             <Percentage className="percentage">{percentage}%</Percentage>
           </StatisticsItem>
        ))}
    </StatisticsList>
  </StatisticsSection>
  );
} ;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};



