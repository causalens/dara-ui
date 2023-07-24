import { faTenge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tenge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tenge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTenge} {...props} />;
};

export default Tenge;
