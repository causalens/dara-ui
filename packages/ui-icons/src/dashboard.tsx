import { faDashboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dashboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dashboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDashboard} {...props} />;
};

export default Dashboard;
