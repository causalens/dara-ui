import { faSun } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sun icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sun = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSun} {...props} />;
};

export default Sun;
