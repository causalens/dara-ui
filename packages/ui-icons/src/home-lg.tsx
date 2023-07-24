import { faHomeLg } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HomeLg icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HomeLg = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHomeLg} {...props} />;
};

export default HomeLg;
