import { faDonate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Donate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Donate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDonate} {...props} />;
};

export default Donate;
