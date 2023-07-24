import { faTintSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TintSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TintSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTintSlash} {...props} />;
};

export default TintSlash;
