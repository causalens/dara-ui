import { faLegal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Legal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Legal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLegal} {...props} />;
};

export default Legal;
