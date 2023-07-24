import { faHomeLgAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HomeLgAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HomeLgAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHomeLgAlt} {...props} />;
};

export default HomeLgAlt;
