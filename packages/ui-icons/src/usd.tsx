import { faUsd } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Usd icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Usd = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsd} {...props} />;
};

export default Usd;
