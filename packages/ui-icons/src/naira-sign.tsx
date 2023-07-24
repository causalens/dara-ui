import { faNairaSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * NairaSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const NairaSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNairaSign} {...props} />;
};

export default NairaSign;
