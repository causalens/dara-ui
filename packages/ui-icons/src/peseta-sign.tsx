import { faPesetaSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PesetaSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PesetaSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPesetaSign} {...props} />;
};

export default PesetaSign;
