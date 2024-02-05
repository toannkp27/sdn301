import { Box } from '@mui/material';
import { MatxProgressBar, SimpleCard } from '../components';
import { Small } from '../components/Typography';

const Campaigns = () => {
  return (
    <Box>
      <SimpleCard title="Campaigns">
        <Small color="grey">Today</Small>
        <MatxProgressBar value={75} color="blue" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="blue" text="Tensor (80k)" />

        <Small color="grey" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="blue" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="blue" text="Tensor (80k)" />

        <Small color="grey" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="blue" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="blue" text="Tensor (80k)" />
      </SimpleCard>
    </Box>
  );
};

export default Campaigns;
