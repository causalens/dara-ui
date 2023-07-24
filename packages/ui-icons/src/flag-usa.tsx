import { faFlagUsa } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FlagUsa icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FlagUsa = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFlagUsa} {...props} />;
};

export default FlagUsa;
