import { faRoad } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Road icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Road = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoad} {...props} />;
};

export default Road;
