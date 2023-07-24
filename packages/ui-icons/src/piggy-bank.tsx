import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PiggyBank icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PiggyBank = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPiggyBank} {...props} />;
};

export default PiggyBank;
