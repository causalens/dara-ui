import { faInr } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Inr icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Inr = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faInr} {...props} />;
};

export default Inr;
