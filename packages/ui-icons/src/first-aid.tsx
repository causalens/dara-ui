import { faFirstAid } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FirstAid icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FirstAid = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFirstAid} {...props} />;
};

export default FirstAid;
