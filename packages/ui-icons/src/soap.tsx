import { faSoap } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Soap icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Soap = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSoap} {...props} />;
};

export default Soap;
