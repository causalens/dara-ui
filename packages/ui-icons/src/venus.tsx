import { faVenus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Venus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Venus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVenus} {...props} />;
};

export default Venus;
