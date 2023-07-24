import { faTransgender } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Transgender icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Transgender = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTransgender} {...props} />;
};

export default Transgender;
