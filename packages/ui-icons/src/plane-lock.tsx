import { faPlaneLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlaneLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlaneLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlaneLock} {...props} />;
};

export default PlaneLock;
