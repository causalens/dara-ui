import { faTasks } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tasks icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tasks = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTasks} {...props} />;
};

export default Tasks;
