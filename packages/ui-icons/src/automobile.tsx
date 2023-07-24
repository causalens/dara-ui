import { faAutomobile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Automobile icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Automobile = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAutomobile} {...props} />;
};

export default Automobile;
