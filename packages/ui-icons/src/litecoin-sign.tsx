import { faLitecoinSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LitecoinSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LitecoinSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLitecoinSign} {...props} />;
};

export default LitecoinSign;
