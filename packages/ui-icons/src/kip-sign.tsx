import { faKipSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * KipSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const KipSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKipSign} {...props} />;
};

export default KipSign;
